import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Section1}>
        <div className={classes.Vision}>
          <h3>OUR VISION</h3>
          <p className={classes.Vision2}>
            Fostering the engagement of students in co-curricular and
            extracurricular activities, and to inculcate in them the urge to
            analyse, explore, build and project innovation as a community
            comprising members from varied backgrounds
          </p>
        </div>
        <form className={classes.Newsletter}>
          <input
            className={classes.input_area}
            type="text"
            placeholder="Email Address"
          />
          <button className={classes.input_btn} type="submit">
            {">"}
          </button>
        </form>
      </div>
      <div className={classes.Section2}>
        <div className={classes.About}>
          <h3>ABOUT US</h3>
          <p className={classes.About_bel}>
            Govind Ballabh Pant Institute of Engineering &amp; Technology is an
            Institute with total commitment to quality and excellence in
            academic pursuits. The Institute was established in 1989, as an
            autonomous body, with a view to fulfil the ever-growing demand for
            well-trained professionals.
          </p>
        </div>
        <div className={classes.Quicklinks}>
          <h3>Quick Links</h3>
          <ul className={classes.FooterLinks}>
            <li>
              <a className={classes.links} href="/">
                HOME
              </a>
            </li>
            <li>
              <a className={classes.links} href="http://www.gbpec.ac.in/aboutus/contact.php" target={"_blank"}>
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.Services}>
          <h3>OUR SERVICES</h3>
          <ul className={classes.ServicesLinks}>
            <li>
              <a className={classes.links} href="#">
                Fresher Jobs
              </a>
            </li>
            <li>
              <a className={classes.links} href="#">
                InternEdge - Internships &amp; Projects{" "}
              </a>
            </li>
            <li>
              <a className={classes.links} href="#">
                Resume Edge - Resume Writing Services
              </a>
            </li>
            <li>
              <a className={classes.links} href="#">
                Readers Galleria - Curated Library
              </a>
            </li>
            <li>
              <a className={classes.links} href="#">
                Trideus - Campus Ambassadors
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className={classes.copy_right}>
        <div className={classes.Section3}>
          Copyright © Govind Ballabh Pant Institute of Engineering &amp;
          Technology, Pauri Garhwal
        </div>
      </section>
    </div>
  );
};

export default Footer;
