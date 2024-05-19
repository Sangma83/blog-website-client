import { motion, useAnimation } from 'framer-motion';
import img from '../../assets/desert.jpg';
import img2 from '../../assets/friendzonecamp.jpg';
import img3 from '../../assets/img10.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';

const ExtraSection = () => {
  const controls = useAnimation();

  return (
    <motion.div
      className="extra-section my-10"
      initial={{ opacity: 0, y: '100px' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-4xl text-center font-bold mb-4'>EXPLORE MORE</h2>
      <div className="image-grid grid grid-cols-4 gap-4">
        <ImageContainer src={img} title="Desert" />
        <ImageContainer src={img2} title="Friends" />
        <ImageContainer src={img3} title="Bridge" />
        <ImageContainer src={img4} title="Singpore" />
        <ImageContainer src={img5} title="Thailand" />
        <ImageContainer src={img6} title="Mountain" />
        <ImageContainer src={img7} title="Minibus" />
        <ImageContainer src={img8} title="Waterfall" />
        {/* Add more ImageContainer components as needed */}
      </div>
    </motion.div>
  );
};

const ImageContainer = ({ src, title }) => {
  return (
    <motion.div
      className="image-container"
      style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', position: 'relative' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.p
        className="image-text"
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, color: 'white', fontSize: '1.5rem', textAlign: 'center', background: 'rgba(0, 0, 0, 0.5)', padding: '1rem', borderRadius: '8px' }}
      >
        {title}
      </motion.p>
      <motion.img
        src={src}
        alt={title}
        style={{ width: '100%', height: 'auto' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default ExtraSection;
