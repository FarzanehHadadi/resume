const DownloadCV = () => {
  return (
    <div className="px-4">
      <h3 className="text-primary">Download</h3>
      <h5>Save a copy of my CV</h5>
      <p>Press the button below to download my CV in .pdf format</p>
      <a
        className="btn btn-success px-4 mx-2"
        href="/F-Haddadi-en.pdf"
        download
      >
        English
      </a>
      <a className="btn btn-success px-4" href="/F-Haddadi-en.pdf" download>
        Persian
      </a>
    </div>
  );
};

export default DownloadCV;
