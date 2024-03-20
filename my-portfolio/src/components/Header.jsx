import FrontendMentorIcon from '../../public/assets/icon-frontend-mentor.svg';


const Header = () => {
  return (
    <header className="bg-black text-white py-6">
      <div className="container mx-auto px-6 flex justify-between items-center flex-col gap-3 md:flex-row">
        <h1 className="text-2xl font-bold">annkiunga</h1>
        <div className='flex'>
          <a href="https://www.linkedin.com/in/ann-mukami/" className="text-gray-400 hover:text-blue-500 mr-4 md:mr-6"><i className="fab fa-linkedin"></i></a>
          <a href="https://twitter.com/AnnKiungaa" className="text-gray-400 hover:text-blue-500 mr-4 md:mr-6"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://github.com/Kiunga1" className="text-gray-400 hover:text-blue-500 mr-4 md:mr-6"><i className="fab fa-github"></i></a>
          <a href="https://www.frontendmentor.io/profile/Kiunga1"><img src={FrontendMentorIcon} alt="FrontendMentor-icon" className="h-6 w-6" /></a>
        </div>
      </div>
    </header>
  )
}

export default Header
