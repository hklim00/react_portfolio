function Pop({ children }) {
	return (
		<aside className='pop'>
			<div className='con'>{children}</div>
			<span className='close'>CLOSE</span>
		</aside>
	);
}

export default Pop;
