import React from 'react'
import { Link } from 'react-router-dom'

const Successfull = () => {
  return (
    <div><div class="congratulation-area text-center mt-5">
    <div class="container">
        <div class="congratulation-wrapper">
            <div class="congratulation-contents center-text">
                <div class="congratulation-contents-icon">
                    <i class="fas fa-check"></i>
                </div>
                <h4 class="congratulation-contents-title"> Congratulations! </h4>
                <p class="congratulation-contents-para"> Your account is ready to submit proposals and get work. </p>
                <div class="btn-wrapper mt-4">
                    <Link to='/'><a href="javascript:void(0)" class="cmn-btn btn-bg-1"> Go to Home </a></Link>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Successfull