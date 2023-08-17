function welcomeAlert() {
  document.getElementById('welcome');
  alert(`Hello, you're welcome to Circle-277 School Stat!`);
}


function instructors() {
  var instructor = document.getElementById('display')
  instructor.innerHTML = `
        <h2 class='text-center fw-bold'>Meet Our Instructors</h2>
        <ol class='row row-responsive mt-5'>
            <li class='col-md-2'>
                <h3>Adewale Yusuf</h3>
                <p>Courses: </p>
            </li>
            <li class='col-md-4'>
                <img src='yusuf.jpg' id='instructors' alt='Photo of Adewale'/>
            </li>

            <li class='col-md-2'>
                <h3>Jerry Uke</h3>
                <p>Courses: </p>
            </li>
            <li class='col-md-4'>
                <img src='jerry.jpg' id='instructors' alt='Photo of Jerry'/>
            </li>
        </ol>

        <ol class='row row-responsive mt-5'>
            <li class='col-md-2'>
                <h3>Tabitha Kavyu</h3>
                <p>Courses: </p>
            </li>
            <li class='col-md-4'>
                <img src='tabitha.jpg' id='instructors' alt='Photo of Tabitha'/>
            </li>
        
            <li class='col-md-2'>
                <h3>Oluwasetemi Ojo</h3>
                <p>Courses: </p>
            </li>
            <li class='col-md-4'>
                <img src='oluwasetemi.jpg' id='instructors' alt='Photo of Oluwasetemi'/>
            </li>
        </ol>

        <ol class='row row-responsive mt-5'>
            <li class='col-md-2'>
                <h3>Rising Odegua</h3>
                <p>Courses: </p>
            </li>
            <li class='col-md-4'>
                <img src='rising.jpg' id='instructors' alt='Photo of Rising'/>
            </li>
        
            <li class='col-md-2'>
                <h3>Rukevwe Onuwa</h3>
                <p>Courses: </p>
            </li>
            <li class='col-md-4'>
                <img src='rukevwe.jpg' id='instructors' alt='Photo of Rukevwe'/>
            </li>
        </ol>

        <ol class='row row-responsive mt-5'>
            <li class='col-md-2'>
                <h3>Rachael Onoja</h3>
                <p>Courses: </p>
            </li>
            <li class='col-md-4'>
                <img src='rachael.png' id='instructors' alt='avatar image'/>
            </li>
        
            <li class='col-md-2'>
                <h3></h3>
                <p>Courses: </p>
            </li>
            <li class='col-md-4'>
                <img src='.jpg' id='instructors' alt='Photo of instructor'/>
            </li>
        </ol>
    `
}

function studyTracks() {
  var tracks = document.getElementById('display')
  tracks.innerHTML = `
        <h2 class='text-center fw-bold mt-5'>Our Study Tracks Include</h2>
        <ol class='row row-responsive'>
            <li class='col-md-4'>
                <h3>Cloud Engr.</h3>
                <img src='cloud.jpg' id='tracks' alt='Photo depicting cloud engr.'/>
            </li>
            <li class='col-md-4'>
                <h3>Frontend</h3>
                <img src='frontend.jpg' id='tracks' alt='Photo illustrating frontend'/>
            </li>
            <li class='col-md-4'>
                <h3>Backend</h3>
                <img src='backend.jpg' id='tracks' alt='Photo illustrating backend'/>
            </li>
        </ol>
    `
}


function studentsGenderAndAge() {
  var studentData = document.getElementById('display')
  studentData.innerHTML = `<h2 class='text-center fw-bold mt-5'>Students' Gender and Age Distribution</h2>
        <div class='table-responsive mt-5'>        
            <table class='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Full names</th>
                        <th>Gender</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Osariemen Aibueku</td>
                        <td>Male</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Olayinka Daniel</td>
                        <td>Male</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Ekene Ikogbwe</td>
                        <td>Male</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>TechMomma Okonkwo</td>
                        <td>Female</td>
                        <td>26</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Abdulhameed Busari</td>
                        <td>Female</td>
                        <td>27</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Tatyana Effa</td>
                        <td>Female</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Adeyemi Akinyemi</td>
                        <td>Male</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Oyediran Michael A.</td>
                        <td>Male</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Nwabuwa Philip Emeka</td>
                        <td>Male</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Adebanjo Abolanle Mary</td>
                        <td>Female</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Ephraim Haruna Mamman</td>
                        <td>Male</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Martins Umekwe</td>
                        <td>Male</td>
                        <td>26</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Munir Adavize Abdullahi</td>
                        <td>Male</td>
                        <td>27</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Chigozie Oziri</td>
                        <td>Male</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td colspan="4" class='info'>DISCLAIMER: Gender and Age are demo data. Click 
                            <a href="https://github.com/Oluwasetemi/altschool-opensource-names/blob/main/names.txt" target='_blank'>
                                here
                            </a> to view source of Full names.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
}


function contactForm() {
  var contact = document.getElementById('display')
  contact.innerHTML = `
        <h2 class='text-center fw-bold mt-5'>We would love to here from you!</h2>
        <form action="https://formsubmit.co/a796eb1807de5f383e56b376889a312e" method="POST">
            <div class="form-group">
                <label for="fname"  class='mt-3'>First name</label>
                <input type="text"
                    placeholder="Enter first name"
                    class="form-control p-5"
                    id="firstname"
                    name="firstname"
                    required
                >
            </div>
            <div class="form-group">
                <label for="email" class='mt-3'>Email</label>
                <input type="email"
                    placeholder="Enter email address"
                    class="form-control p-5"
                    id="email"
                    name="email"
                    required
                >
            </div>
            <div class="form-group">
                <label for="message"  class='mt-3'>Leave a message</label>
                <textarea type="text"
                    placeholder="Write your message here"
                    class="form-control p-5"
                    id="message"
                    name="message"
                    required
                    minlength="30"
                    maxlength="150"
                ></textarea>
            </div>
            <button class="btn btn-primary btn-lg m-3" type="submit">Send</button>
        </form>
    `
}

const person = {
  fname: 'Chigozie',
  lname: 'Oziri',
  message: ' is the sole contributor to this project work.',
  information: function() { return this.fname + ' ' + this.lname + this.message }
}

console.log(person.information())
