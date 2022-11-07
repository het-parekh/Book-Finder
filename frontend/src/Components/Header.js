function Header(){
    return(
    <nav className="flex items-center justify-between flex-wrap bg-theme-green p-4">
        <div className="flex items-center flex-shrink-0 text-soft-black mr-6">
            <span className='content-open_book mr-3'></span>
            <span className="font-semibold text-[24px] tracking-tight">BookSEO</span>
        </div>
        <div className="block lg">
            <button className="flex items-center px-3 py-2 border rounded text-soft-black border-soft-black hover:text-theme-green hover:bg-soft-black">
                SignIn/Register
            </button>
        </div>
    </nav>
    )
}

export default Header