const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">
            Giakaa
          </h3>
          <p className="text-sm">
            AI-first consulting for measurable growth.
          </p>
        </div>

        <div>
          <h4 className="text-white mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Insights</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-2">Contact</h4>
          <p className="text-sm">contact@giakaa.com</p>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-white/10">
        © 2026 Giakaa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
