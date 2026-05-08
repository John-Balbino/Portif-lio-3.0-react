export function Navbar(){

    function Whatsapp(){
        const phone = '5511959768301';
        const message = 'Olá, gostaria de entrar em contato com você.';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
    return(
        <header className="flex flex-col md:flex-row items-center justify-between
         bg-black w-full  text-white p-2 gap-2">
            <div className="flex flex-col items-center">
            
                <h1 className="animate-pulse text-2xl bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Dev.John Balbino</h1>
            </div>
            <nav>
                <ul className="flex gap-4 uppercase text-[25px]" >
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-whatsapp" onClick={Whatsapp}></i>
                </ul>
            </nav>
        </header>
    )
}