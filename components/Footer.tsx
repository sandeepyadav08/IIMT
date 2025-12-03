export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Indian Institute of Management Tiruchirappalli. 
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
