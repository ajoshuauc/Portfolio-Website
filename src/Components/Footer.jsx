function Footer() {
    return (
        <footer className="w-full py-6 px-4 bg-[#0E1A23] border-t border-[#1A2E3A] text-center">
            <p className="text-xs sm:text-sm text-slate-400">
                &copy; {new Date().getFullYear()} Anthony Cagampang. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
