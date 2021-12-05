import { useContext, useState } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { createMcqQuestion } from '../util/createMcqQuestion'
import '../assets/styles/createRoom.css'
import { AppContext } from '../components/App'
import '../assets/styles/loader.css'

export default function ContactUs({ history }: RouteComponentProps) {
  const [title, setTitle] = useState('')
  const [correctAnswer, setCorrect] = useState(0)
  const [options, setOptions] = useState(['', '', '', ''])
  const { roomId, isLoading, setIsLoading } = useContext(AppContext)
  var template = localStorage.getItem('template') || 'default';
  function setCorrectAnswer(index: number){
    setCorrect(index)
  }

  function setOptionIndex(optionValue: string, index: number) {
    let _options = options
    _options[index] = optionValue
    setOptions(_options)
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <a className="navbar-brand" href="/">PollMe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contactus">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Login</a> </li>
                        </ul>
                    </div>
                </div>
    </nav>


    <section className="py-5 border-bottom" id="features">
            <div className="container px-5 my-5">
                <div className="row gx-5">
               
                    <div className="col-lg-6">
                 <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                        <h3 className="mb-0 mr-4 mt-2">Hello, there</h3>
                        <p className="mb-0 text-sm">
                          We're glad to hear from you!
                        </p>
                        <br/>
                        <br/>

                        <h3>Team Members P3 </h3>


                    <table className = "center">
                      <tr>
                          <td align="center"><a href="https://github.com/apurva-s"><img src="https://avatars.githubusercontent.com/u/32777604?v=4" width="100px;" alt=""/><br /><sub><b>Apurva Sonavane</b></sub></a><br /></td>
                        <td align="center"><a href="https://github.com/ArpithaVijayakumar/"><img src="https://avatars.githubusercontent.com/u/45428701?s=400&u=15851f4800b87dcd2b8cbf9ff0a040bc8987e7c0&v=4" width="100px;" alt=""/><br /><sub><b>Arpitha Vijayakumar</b></sub></a></td>
                      <td align="center"><a href="https://github.com/ivbhatt"><img src="https://avatars.githubusercontent.com/u/20361038?v=4" width="100px;" alt=""/><br /><sub><b>Ishan Bhatt</b></sub></a><br /></td>
                        <td align="center"><a href="https://github.com/Krishika510"><img src="https://avatars.githubusercontent.com/u/17769434?v=4" width="100px;" alt=""/><br /><sub><b>Krishika Shivnani</b></sub></a><br /></td>
                        <td align="center"><a href="https://github.com/UnnatiPrema/"><img src="https://avatars.githubusercontent.com/u/24750759?s=400&u=ab27d86edc758ff53bd68808430d8e5bf172e34a&v=4" width="100px;" alt=""/><br /><sub><b>Unnati Nadupalli</b></sub></a><br /></td>
                      </tr>
                    </table>
                    <br/>
                    <br/>

                    <h3> 📬  Contact Us At</h3> featurehuntteam@gmail.com
                    </div>
</div>
</div>
</div>

</div>


</section>



</>
  )
}