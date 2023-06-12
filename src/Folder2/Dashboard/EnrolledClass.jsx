import React from 'react';
import { motion } from 'framer-motion';
const EnrolledClass = () => {
  return (
    <div>
          <motion.h1
  className="my-2 font-mono text-3xl text-center"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 2 }}
  transition={{ duration: 0.5 }}
>
Enrolled Class
</motion.h1>
    </div>
  );
};

export default EnrolledClass;