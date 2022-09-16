import Image from 'next/image'; 
function Header(){
    return(
        <>
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{display: 'flex',justifyContent: 'center',alignItems:'center'}}>
      <Image src="/../public/BBC_News-Logo.png" alt="" width="60" height="40" className="d-inline-block align-text-top"/>
      BBC NEWS
    </a>
  </div>
</nav>
        </>
    );
}
export default Header;