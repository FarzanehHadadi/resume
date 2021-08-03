const DownloadCV = () => {
  return (
    <div>
      <h3>Download</h3>
      <h4>Save a copy of my CV</h4>
      <p>Press the button below to download my CV in .pdf format</p>
      <a className="btn btn-success px-4" href="/resume-test.pdf" download>
        resume
      </a>
    </div>
  );
};

export default DownloadCV;
