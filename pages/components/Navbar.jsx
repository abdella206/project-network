import Identicon from 'identicon.js';
//import photo from '../../public/photo.jpg'
import Image from 'next/image'
import Link from 'next/link';

const Navbar = ({ account }) => {

  
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link href="/">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" rel="noopener noreferrer">
            <Image src="/photo.jpg" width="30" height="30" className="d-inline-block align-top" alt="" />
            Decentee-Mentee
          </a>
        </Link>
        <ul className="navbar-nav px-3">
          <li >
            <small className="text-secondary">
              <small id="account">{account}</small>
            </small>
            {account
              ? <img
                className='ml-2'
                width='30'
                height='30'
                alt="pic"
                src={`data:image/png;base64,${new Identicon(account, 30).toString()}`}
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  
}

export default Navbar;




// import React, { Component } from 'react';
// import Identicon from 'identicon.js';
// import photo from '../photo.png'

// class Navbar extends Component {

//   render() {
//     return (
//       <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
//         <a
//           className="navbar-brand col-sm-3 col-md-2 mr-0"
//           href="http://www.dappuniversity.com/bootcamp"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={photo} width="30" height="30" className="d-inline-block align-top" alt="" />
//           Decentragram!!
//         </a>
//         <ul className="navbar-nav px-3">
//           <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
//             <small className="text-secondary">
//               <small id="account">{this.props.account}</small>
//             </small>
//             { this.props.account
//               ? <img
//                 className='ml-2'
//                 width='30'
//                 height='30'
//                 src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
//               />
//               : <span></span>
//             }
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;