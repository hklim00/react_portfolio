import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const inputEdit = useRef(null);
	const textareaEdit = useRef(null);

	const getLocalData = () => {
		const dummyPosts = [
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];
		const data = localStorage.getItem('post');
		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const createForm = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			return;
		}
		setPosts([
			{
				title: input.current.value,
				content: textarea.current.value,
			},
			...Posts,
		]);

		console.log(Posts);

		resetForm();
	};

	const deletePosts = (index) => {
		const newPosts = Posts.filter((_, idx) => idx !== index);
		setPosts(newPosts);
	};

	const updatePosts = (index) => {
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			resetForm();
			return alert('수정할 제목과 본문을 모두 입력하세요.');
		}

		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) {
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);

		setAllowed(true);
	};

	const enableUpdate = (index) => {
		if (!Allowed) return;
		setAllowed(false);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<input
					type='text'
					ref={input}
					placeholder='Please enter a title'
					maxLength={30}
				/>
				<textarea
					name=''
					id=''
					ref={textarea}
					maxLength={200}
					placeholder='Please enter the contents'></textarea>
				<div className='btns'>
					<button onClick={resetForm}>CANCEL</button>
					<button onClick={createForm}>WRITE</button>
				</div>
			</div>
			<ul className='showList'>
				{Posts.map((post, idx) => {
					return (
						<li key={idx}>
							{post.enableUpdate ? (
								<>
									<div className='editText'>
										<input
											type='text'
											ref={inputEdit}
											defaultValue={post.title}
											maxLength={30}
										/>
										<textarea
											name=''
											id=''
											ref={textareaEdit}
											defaultValue={post.content}
											maxLength={200}></textarea>
									</div>
									<div className='btnSet'>
										<button onClick={() => disableUpdate(idx)}>CANCEL</button>
										<button onClick={() => updatePosts(idx)}>UPDATE</button>
									</div>
								</>
							) : (
								<>
									<div className='text'>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</div>
									<div className='btnSet2'>
										<button onClick={() => deletePosts(idx)}>DELETE</button>
										<button onClick={() => enableUpdate(idx)}>EDIT</button>
									</div>
								</>
							)}
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default Community;
