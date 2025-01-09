import './App.css';
import ImageSlider from './components/ImageSlider/ImageSlider';

const images = [
    'https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1735822083502-0c5fab870457?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1736210811075-7509d5023a4a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

function App() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Image Slider</h1>
            <ImageSlider images={images} />
        </>
    );
}

export default App;
