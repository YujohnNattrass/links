const Instructions = () => {
  const gifStyle = {
    display: 'block',
    width: '600px',
    margin: '20px auto 0 auto',
    border: '2px solid #8E8D8A'
  };

  return (
    <div className="container text-center pb-5">
      <h2>How to add a link</h2>
      <img
        src="/images/link-o-links.gif"
        alt="Add link instructions"
        style={gifStyle}
      />
    </div>
  )
}

export default Instructions;