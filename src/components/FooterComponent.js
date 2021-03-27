import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/shopping'>Shop</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12025551234"><i className="fa fa-phone" /> 1-202-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:homemadeOnTheHomestead@gmail.com"><i className="fa fa-envelope-o" /> homemadeOnTheHomestead@gmail.com</a>
                        <Form className="form-inline">
                            <Input type="text" placeholder="Search..." name="search" />
                            <Button type="submit"><i className="fa fa-search" /></Button>
                        </Form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;