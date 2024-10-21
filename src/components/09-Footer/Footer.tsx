import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <footer className="bg-dark text-white">
        <div className="pt-16 pb-12 border-top border-slate-900 footerBg">
          <Container
            className="col-lg-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Row style={{ justifyContent: "space-evenly", inlineSize: "95%" }}>
              <Col md={4} lg={3} className="mb-4">
                <h3 className="text-white text-xl mb-3">Address</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11005.563681434174!2d8.51296182084741!3d47.37031708870288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a1846221b1b%3A0xebb6caa1a55e4987!2sMeerhaa%20Ayurveda%20Gesundheitspraxis!5e1!3m2!1sen!2sin!4v1728620904904!5m2!1sen!2sin"
                  width="100%"
                  className="h-[300px] lg:h-[90%] mt-4"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
              <Col md={4} lg={2} className="mb-4">
                <h3 className="text-white text-xl mb-3">Quick Links</h3>
                <Nav className="flex-column">
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/")}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/about")}
                  >
                    About Us
                  </Nav.Link>
                  {/* <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/gallery")}
                  >
                    {t("footer.gallery")}
                  </Nav.Link> */}
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/treatments")}
                  >
                    Treatments
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/price")}
                  >
                    Price List{" "}
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/voucher")}
                  >
                    Voucher
                  </Nav.Link>

                  {/* <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/faq")}
                  >
                    {t("footer.faq")}
                  </Nav.Link> */}
                </Nav>
              </Col>
              <Col md={4} lg={3} className="mb-4">
                <h3 className="text-white text-xl mb-3">Opening Hours </h3>
                <Nav className="flex-column">
                  <Nav.Link className="text-lg text-white hover:text-yellow-500">
                    Mon - Tues: 09:00 AM - 19:00 PM
                  </Nav.Link>
                  <Nav.Link className="text-lg text-white hover:text-yellow-500">
                    Wed - Thur : 10:00 AM - 20:00 PM
                  </Nav.Link>
                  <Nav.Link className="text-lg text-white hover:text-yellow-500">
                    Friday : 13:00 PM - 21:00 PM
                  </Nav.Link>
                  <Nav.Link className="text-lg text-white hover:text-yellow-500">
                    Saturday : 09:00 AM - 23:00 PM
                  </Nav.Link>
                </Nav>
              </Col>
              {/* <Col md={4} lg={3} className="mb-4">
                <h3 className="text-white text-xl mb-3">

                  Social Media Links
                </h3>
                <Nav className="flex-column">
                  <Nav.Link className="text-lg text-white hover:text-yellow-500">
                    Facebook                  </Nav.Link>
                  <Nav.Link className="text-lg text-white hover:text-yellow-500">
                    Instagram                  </Nav.Link>
                  <Nav.Link className="text-lg text-white hover:text-yellow-500">
                    Youtube                  </Nav.Link>
                </Nav>
              </Col> */}
            </Row>
          </Container>
        </div>
        <div className="py-4 bg-black-700 border-top border-slate-900">
          <Container>
            <Row className="align-items-center">
              <Col
                md={12}
                lg={6}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                © 2024 Eshaa Ayurveda. All rights reserved.
              </Col>

              <Col md={12} lg={6}>
                <Nav className="mt-3" style={{ justifyContent: "center" }}>
                  <Nav.Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="text-white"
                  >
                    <FaInstagram fontSize={20} />
                  </Nav.Link>
                  <Nav.Link className="text-white">
                    <FaFacebook fontSize={20} />
                  </Nav.Link>
                  <Nav.Link className="text-white">
                    <FaXTwitter fontSize={20} />
                  </Nav.Link>
                  <Nav.Link
                    className="text-white"
                    href="https://wa.me/"
                    target="_blank"
                  >
                    <FaWhatsapp fontSize={20} />
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
}
