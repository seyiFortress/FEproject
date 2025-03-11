import React from 'react'
import formData from '../signUp/Signup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChalkboard, faTable} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Welcome = () => {

    const totalCatElem = <FontAwesomeIcon icon={faTable} className='text-success py-3' />
    const totalSubCatElem = <FontAwesomeIcon icon={faTable} className='text-warning-emphasis py-3' />
    const learnMat = <FontAwesomeIcon icon={faChalkboard} className='text-success py-3' />

  return (
    <div className='wrapper vh-100 vw-100 bg-primary d-lg-flex gap-0'>
        <nav class="side-hero navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/welcome">{formData.email}</Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Yoruba Aloud</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/categories">Categories</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/materials">Learning Materials</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/quiz">Quiz</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/admin">Admin Profile</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/login">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <main className='container-fluid bg-light'>
            <div class="row text-center">
                <div class="col bg-light d-flex flex-column align-items-start ps-3 bg-light-subtle shadow rounded-3 m-3">
                    {totalCatElem}
                    <p>Total Categories</p>
                    <p className='pt-4'>0</p>
                </div>
                <div class="col bg-light d-flex flex-column align-items-start ps-3 bg-light-subtle shadow rounded-3 m-3">
                    {learnMat}
                    <p>Learning Materials</p>
                    <p className='pt-4'>24</p>
                </div>
                <div class="col bg-light d-flex flex-column align-items-start ps-3 bg-light-subtle shadow rounded-3 m-3">
                    {totalSubCatElem}
                    <p>Total Subcategories</p>
                    <p className='pt-4'>0</p>
                </div>
            </div>
            <div class="row text-center">
                <div class="col bg-light d-flex flex-column align-items-start ps-3 bg-light-subtle shadow rounded-3 m-3">
                    {totalCatElem}
                    <p>Total Quiz</p>
                    <p className='pt-4'>0</p>
                </div>
                <div class="col bg-light d-flex flex-column align-items-start ps-3 bg-light-subtle shadow rounded-3 m-3">
                    {totalCatElem}
                    <p>Total Students</p>
                    <p className='pt-4'>0</p>
                </div>
                <div class="col bg-light d-grid p-3 bg-light-subtle shadow rounded-3 m-3">
                    <button type="button" class="btn btn-primary mb-5">Top three students</button>
                </div>
            </div>
            <div class="row text-center">
                <div class="col bg-light d-flex flex-column align-items-start ps-3 bg-light-subtle shadow rounded-3 m-3">
                    <table className='table'>
                        <thead className=' '>
                            <tr className='  table-primary'>
                                <th scope='col' className='border-start border-end border-success border-bottom-0'>Name</th>
                                <th scope='col' className='border-start border-end border-success border-bottom-0'>Email</th>
                                <th scope='col' className='border-start border-end border-success border-bottom-0'>Phone Number</th>
                                <th scope='col' className='border-start border-end border-success border-bottom-0'>Position</th>
                                <th scope='col' className='border-start border-end border-success border-bottom-0'>Total Score</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
    
  )
}

export default Welcome
