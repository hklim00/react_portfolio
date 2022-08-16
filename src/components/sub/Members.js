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
										<label htmlFor=''>ID</label>
										<input type='text' placeholder='ID' />
									</td>
									<td>
										<label htmlFor=''>Email</label>
										<input type='text' placeholder='Email' />
									</td>
								</tr>
								<tr>
									<td>
										<label htmlFor=''>Password</label>
										<input type='text' placeholder='Password' />
									</td>
									<td>
										<label htmlFor=''>Re-Password</label>
										<input type='text' placeholder='Re-Password' />
									</td>
								</tr>
								<tr>
									<td>
										<label htmlFor=''>Gender</label>
										<input type='radio' />
										<label htmlFor=''></label>
										<input type='radio' />
									</td>
									<td>
										<label htmlFor=''>Interests</label>
										<input type='checkbox' />
										<label htmlFor=''></label>
										<input type='checkbox' />
										<label htmlFor=''></label>
										<input type='checkbox' />
									</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<label htmlFor=''></label>
										<textarea name='' id='' placeholder='Comment'></textarea>
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
