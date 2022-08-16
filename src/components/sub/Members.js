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
										<label htmlFor='male'>
											<input type='radio' id='male' name='gender' />
											male
										</label>
										<label htmlFor='female'>
											<input type='radio' id='female' name='gender' />
											female
										</label>
										<p className='err'></p>
									</td>
									<td>
										<label htmlFor='musium'>
											<input type='checkbox' id='musium' name='interests' />
											musium
										</label>

										<label htmlFor='liblary'>
											<input type='checkbox' id='liblary' name='interests' />
											liblary
										</label>

										<label htmlFor='hall'>
											<input type='checkbox' id='hall' name='interests' />
											hall
										</label>
										<p className='err'></p>
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
