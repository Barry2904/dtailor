import Link from 'next/link'
import Image from 'next/image'

import UserNav from './UserNav'
import GithunRepo from './GihubRepo'
import Searchbar from './Search'
import FeedBack from './FeedBack'

const config = require('../../../next.config')
const base = config.basePath || '';
const NavBar = () => {
    return(
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-1">
                <div className="flex justify-between items-center">
                    <Link href="/"> 
                        <Image 
                            src={`${base}/logo_text.png`}
                            // src={`/logo_text.png`}
                            alt='logo'
                            width={150}
                            height={10}
                        />
                    </Link>

                    <Searchbar/>

                    <div className='flex items-center space-x-6'>
                        <FeedBack />
                        <GithunRepo />
                        <UserNav />
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default NavBar;