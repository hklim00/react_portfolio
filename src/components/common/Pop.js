function Pop({ children, setOpen }) {
	return (
		<aside className='pop'>
			<div className='con'>{children}</div>
			<span className='close' onClick={() => setOpen(false)}>
				CLOSE
			</span>
		</aside>
	);
}

export default Pop;
