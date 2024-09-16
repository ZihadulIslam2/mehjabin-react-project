const Nav = () => {
  return (
    <div className="py-5 bg-purple-500">
      <div className="flex justify-between ">
        <h2 className="px-10 pr-11 text-black">Mehjabin</h2>
        <ul className="flex justify-between px-28">
          <li className="pr-10">
            <a href="/" className="text-black">
              Home
            </a>
          </li>
          <li className="pr-10">
            <a href="/about" className="text-black">
              About
            </a>
          </li>
          <li className="pr-10">
            <a href="/blogs" className="text-black">
              Blogs
            </a>
          </li>
          <li className="pr-10">
            <a href="/login" className="text-black">
              Login
            </a>
          </li>
          <li>
            <a href="/register" className="text-black">
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Nav
