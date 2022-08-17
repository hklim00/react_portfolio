import { useState, useEffect } from 'react';
import Layout from '../common/Layout';

function Members() {
	const [Val, setVal] = useState({
		userid: '',
		password: '',
		password2: '',
		email: '',
		gender: null,
		interests: null,
		comments: '',
	});

	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const check = (value) => {
		const errs = {};

		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()+]/;

		if (value.userid.length < 5) {
			errs.userid = 'Enter at least 5 characters';
		}

		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = 'Must contain at least 8 characters and @';
		}

		if (
			value.password.length < 6 ||
			!eng.test(value.password) ||
			!num.test(value.password) ||
			!spc.test(value.password)
		) {
			errs.password =
				'Include at least 6 characters, English, numbers, and ~!@#$%^&*()+';
		}

		if (value.password !== value.password2 || !value.password2) {
			errs.password2 = 'Please enter the same two passwords';
		}

		if (value.comments.length < 10) {
			errs.comments = 'Enter at least 10 characters';
		}

		if (!value.gender) {
			errs.gender = 'Please choose your gender';
		}

		if (!value.interests) {
			errs.interests = 'Please select at least one interest';
		}

		console.log(errs);
		return errs;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
	};

	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');

		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});

		setVal({ ...Val, [name]: isCheck });
	};

	useEffect(() => {
		console.log(Val);
		console.log(Err);
	}, [Err]);

	return (
		<Layout name={'Members'}>
			<div className='wrap'>
				<h1>
					JOIN <span>MEMBERSHIP</span>
				</h1>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend className='hidden'>회원가입 폼 양식</legend>
						<table>
							<caption className='hidden'>회원가입 정보 입력</caption>
							<tbody>
								<tr>
									<td>
										<label htmlFor='userid' className='hidden'>
											ID
										</label>
										<input
											type='text'
											id='userid'
											name='userid'
											placeholder='ID'
											value={Val.userid}
											onChange={handleChange}
										/>
										<p className='err'>{Err.userid}</p>
									</td>
									<td>
										<label htmlFor='email' className='hidden'>
											Email
										</label>
										<input
											type='text'
											id='email'
											name='email'
											placeholder='Email'
											value={Val.email}
											onChange={handleChange}
										/>
										<p className='err'>{Err.email}</p>
									</td>
								</tr>
								<tr>
									<td>
										<label htmlFor='password' className='hidden'>
											Password
										</label>
										<input
											type='text'
											id='password'
											name='password'
											placeholder='Password'
											value={Val.password}
											onChange={handleChange}
										/>
										<p className='err'>{Err.password}</p>
									</td>
									<td>
										<label htmlFor='password2' className='hidden'>
											Re-Password
										</label>
										<input
											type='text'
											id='password2'
											name='password2'
											placeholder='Re-Password'
											value={Val.password2}
											onChange={handleChange}
										/>
										<p className='err'>{Err.password2}</p>
									</td>
								</tr>
								<tr>
									<td>
										<input
											type='radio'
											id='male'
											name='gender'
											onChange={handleRadio}
										/>
										<label htmlFor='male'>male</label>
										<input
											type='radio'
											id='female'
											name='gender'
											onChange={handleRadio}
										/>
										<label htmlFor='female'>female</label>
										<p className='err'>{Err.gender}</p>
									</td>
									<td>
										<input
											type='checkbox'
											id='musium'
											name='interests'
											onChange={handleCheck}
										/>
										<label htmlFor='musium'>musium</label>

										<input
											type='checkbox'
											id='gallery'
											name='interests'
											onChange={handleCheck}
										/>
										<label htmlFor='gallery'>gallery</label>

										<input
											type='checkbox'
											id='hall'
											name='interests'
											onChange={handleCheck}
										/>
										<label htmlFor='hall'>hall</label>
										<p className='err'>{Err.interests}</p>
									</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<label htmlFor='comments' className='hidden'>
											Comments
										</label>
										<textarea
											name='comments'
											id='comments'
											placeholder='Comments'
											value={Val.comments}
											onChange={handleChange}></textarea>
										<p className='err'>{Err.comments}</p>
									</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<button type='submit' onClick={() => setSubmit(true)}>
											SUBMIT
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</fieldset>
				</form>
			</div>
		</Layout>
	);
}

export default Members;
