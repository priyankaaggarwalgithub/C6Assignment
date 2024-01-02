import React from 'react'

const Footer = () => {
  return (
    <div className="contentfooter">
    <div className="footerItem">
        <h2>Social</h2>
        <ul>
        <li><a href = "#"><i className = "fab fa-twitter"></i>Twitter</a></li>
        <li><a href = "#"><i className = "fab fa-facebook-f"></i>Facebook</a></li>
        <li><a href = "#"><i className = "fab fa-instagram"></i>Instagram</a></li>
        <li><a href = "#"><i className = "fab fa-google-plus-g"></i>Google</a></li>
    </ul>
    </div>
    <div className="footerItem">
        <p><a href = "#">License</a></p>
        <p><a href = "#">Terms Of Service</a></p>
        <p><a href = "#">Privacy Policy</a></p>
        <p><a href = "#">Refunds</a></p>
        <p>Copyright &copy; 2023</p>
        <p>Created by RideShare</p>
    </div>
</div>
  )
}

export default Footer