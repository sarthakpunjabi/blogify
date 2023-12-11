import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>

        {/* First Column  */}

        <div className='justify-between mx-auto gap-16 sm:flex'>
            <div className="mt-16 basis-1/2 sm:mt-0">
                <h4 className="font-bold">Blog of the future</h4>
                <p className="my-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur accusantium quibusdam mollitia, voluptate dignissimos, iste, repellat ducimus ipsa nostrum consectetur doloremque neque. Aperiam reprehenderit libero at est odit repudiandae voluptatem!
                </p>
                <p>
                    &copy; Blog by Sarthak
                </p>
            </div>
        </div>

        {/* Second Column  */}

        <div className='justify-between mx-auto gap-16 sm:flex'>
            <div className="mt-16 basis-1/4 sm:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">
                    Massa orci senectus
                </p>
                <p className="my-5">
                    Some Random Link
                </p>
                <p>
                    Vampires are good
                </p>                
            </div>
        </div>

        {/* Third Column  */}

        <div className='justify-between mx-auto gap-16 sm:flex'>
            <div className="mt-16 basis-1/4 sm:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="font-bold">Contact Us</p>
                <p className="my-5">Massa orci senectus</p>              
                <p>(333)425-389</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer