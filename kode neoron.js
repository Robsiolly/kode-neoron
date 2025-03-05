import { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://your-supabase-url.supabase.co', 'your-anon-key');

export default function Home() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [document, setDocument] = useState('');
  const [unit, setUnit] = useState('');
  const [visitPurpose, setVisitPurpose] = useState('');
  
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const uploadImage = async () => {
    if (!image) return;
    
    const file = dataURLtoFile(image, 'photo.png');
    const { data, error } = await supabase.storage.from('photos').upload(`photos/${Date.now()}.png`, file);
    
    if (error) {
      console.error('Erro ao enviar imagem:', error);
    } else {
      console.log('Imagem salva:', data);
    }
  };

  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold text-green-500">Kode Neoron - Cadastro</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6 w-full max-w-md">
        <input type="text" placeholder="Nome" className="w-full p-2 rounded mb-2 text-black" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="w-full p-2 rounded mb-2 text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="tel" placeholder="Telefone" className="w-full p-2 rounded mb-2 text-black" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Documento" className="w-full p-2 rounded mb-2 text-black" value={document} onChange={(e) => setDocument(e.target.value)} />
        <input type="text" placeholder="Unidade Visitada" className="w-full p-2 rounded mb-2 text-black" value={unit} onChange={(e) => setUnit(e.target.value)} />
        <input type="text" placeholder="Motivo da Visita" className="w-full p-2 rounded mb-2 text-black" value={visitPurpose} onChange={(e) => setVisitPurpose(e.target.value)} />
        <Webcam ref={webcamRef} screenshotFormat="image/png" className="rounded-lg shadow-lg w-full" />
        <button onClick={capture} className="mt-4 p-2 w-full bg-green-500 text-black rounded">Capturar Foto</button>
        {image && <img src={image} alt="Captura" className="mt-4 rounded-lg w-full" />}
        {image && <button onClick={uploadImage} className="mt-4 p-2 w-full bg-gold-500 text-black rounded">Salvar</button>}
      </div>
    </div>
  );
}
