const Header = () => {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500">
          Giakaa
        </div>

        {/* Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <span className="cursor-pointer">Services</span>
          <span className="cursor-pointer">Industries</span>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Insights</span>
        </nav>

        {/* CTA */}
        <button className="bg-blue-500 text-white px-5 py-2 rounded-full">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Header;
