export default function decidirTipoDeArchivo(selectedFile){
    const fileType = selectedFile.type;
    const fileURL = URL.createObjectURL(selectedFile);

    if (fileType.startsWith('image/')) {
        return <img src={fileURL} alt="Previsualización" style={{maxWidth: '90%', maxHeight: '90%', objectFit: 'contain'}} />;
    } else if (fileType.startsWith('video/')) {
        return <video controls src={fileURL} style={{maxWidth: '90%', maxHeight: '90%'}} />;
    } else if (fileType.startsWith('audio/')) {
        return <audio controls src={fileURL} style={{width: '90%'}} />;
    } else if (fileType === 'application/pdf') {
        return <embed src={URL.createObjectURL(selectedFile)} type="application/pdf" width="100%" height="100%" />
    } else {
        return <p style={{color: 'black'}}>Formato no renderizable</p>
    }
}
