import Layout from '../common/Layout';

function Members() {
	return (
		<Layout name={'Members'}>
			<div className='wrap'>
				<h1>
					JOIN <span>MEMBERSHIP</span>
				</h1>
				<form action='' id='contact'>
					<fieldset>
						<legend className='hidden'>회원가입 폼 양식</legend>
						<table>
							<caption className='hidden'>회원가입 정보 입력</caption>
							<tbody>
								<tr>
									<td>
										<label htmlFor='userid'>ID</label>
										<input
											type='text'
											id='userid'
											name='userid'
											placeholder='ID'
										/>
										<p className='err'></p>
									</td>
									<td>
										<label htmlFor='email'>Email</label>
										<input
											type='text'
											id='email'
											name='email'
											placeholder='Email'
										/>
										<p className='err'></p>
									</td>
								</tr>
								<tr>
									<td>
										<label htmlFor='password'>Password</label>
										<input
											type='text'
											id='password'
											name='password'
											placeholder='Password'
										/>
										<p className='err'></p>
									</td>
									<td>
										<label htmlFor='password2'>Re-Password</label>
										<input
											type='text'
											id='password2'
											name='password2'
											placeholder='Re-Password'
										/>
										<p className='err'></p>
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
										<label htmlFor='comment'>Comment</label>
										<textarea
											name='comment'
											id='comment'
											placeholder='Comment'></textarea>
										<p className='err'></p>
									</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<button type='submit'>SUBMIT</button>
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
