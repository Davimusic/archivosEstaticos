import { useState } from "react";
import axios from 'axios';


export function GanttTable({}) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fechaInicio, setFechaInicio] = useState('enero1');
    const [loading, setLoading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    

    const uploadImage = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', 'y8peecdo');

        const res = await axios.post(
            `https://api.cloudinary.com/v1_1/dplncudbq/upload`,
            formData
        );

        console.log(res.data);
        console.log(res.data['url']);
        setLoading(false);
        setUploadSuccess(true);
        setSelectedFile(null);

        // Abre el archivo cargado en una nueva pestaña o ventana del navegador
        if (typeof window !== 'undefined') {
            window.open(res.data.url, '_blank');
        }
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setUploadSuccess(false);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadImage} disabled={!selectedFile || loading}>Subir imagen</button>
            {loading && <p>Cargando...</p>}
            {uploadSuccess && <p>¡Archivo subido con éxito!</p>}
            {selectedFile && <p>Archivo seleccionado: {selectedFile.name}</p>}
            {selectedFile && selectedFile.type.startsWith('image/') && (
                <img src={URL.createObjectURL(selectedFile)} alt="Previsualización" style={{maxWidth: '300px'}} />
            )}
            {selectedFile && selectedFile.type.startsWith('video/') && (
                <video controls src={URL.createObjectURL(selectedFile)} style={{maxWidth: '300px'}} />
            )}
            {selectedFile && selectedFile.type.startsWith('audio/') && (
                <audio controls src={URL.createObjectURL(selectedFile)} />
            )}
            {selectedFile && !selectedFile.type.startsWith('image/') && !selectedFile.type.startsWith('video/') && !selectedFile.type.startsWith('audio/') && (
                <a href={URL.createObjectURL(selectedFile)} download>Descargar archivo seleccionado</a>
            )}
        </div>
    );
}



