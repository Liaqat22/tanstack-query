<<<<<<< HEAD
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid2 } from '@mui/material';
import { addProduct } from './APIs';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function AddProduct() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    description: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(addProduct, formData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add product');
    }
  };

  const mutation = useMutation({
    mutationFn: submitForm,
    onSuccess: (data) => {
      toast.success('Product deleted successfully!', {
        autoClose: 2000 // Closes after 2 seconds
      });
    },
    onError: (error) => {
      toast.error('error in adding the product!', {
        autoClose: 2000 // Closes after 2 seconds
      });
      console.log(error)
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom textAlign="center" className='mt-3 mb-3'>
        Add Product
      </Typography>
      <form onSubmit={handleSubmit}>
      <Grid2 container spacing={2} display="flex" justifyContent="center">
          <Grid2 item size={{ xs: 10, md: 8 }}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item size={{ xs: 10, md: 8 }}>
            <TextField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item size={{ xs: 10, md: 8 }}>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item size={{ xs: 10, md: 8 }}>
            <TextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item size={{ xs: 10, md: 8 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={mutation.isLoading} // Disable button while submitting
            >
              {mutation.isLoading ? 'Submitting...' : 'Submit'}
            </Button>
          </Grid2>
        </Grid2>
      </form>

    
    </Container>
  );
}

export default AddProduct;
=======
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid2 } from '@mui/material';
import { addProduct } from './APIs';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function AddProduct() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    description: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(addProduct, formData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add product');
    }
  };

  const mutation = useMutation({
    mutationFn: submitForm,
    onSuccess: (data) => {
      toast.success('Product deleted successfully!', {
        autoClose: 2000 // Closes after 2 seconds
      });
    },
    onError: (error) => {
      toast.error('error in adding the product!', {
        autoClose: 2000 // Closes after 2 seconds
      });
      console.log(error)
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom textAlign="center" className='mt-3 mb-3'>
        Add Product
      </Typography>
      <form onSubmit={handleSubmit}>
      <Grid2 container spacing={2} display="flex" justifyContent="center">
          <Grid2 item size={{ xs: 10, md: 8 }}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item size={{ xs: 10, md: 8 }}>
            <TextField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item size={{ xs: 10, md: 8 }}>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item size={{ xs: 10, md: 8 }}>
            <TextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item size={{ xs: 10, md: 8 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={mutation.isLoading} // Disable button while submitting
            >
              {mutation.isLoading ? 'Submitting...' : 'Submit'}
            </Button>
          </Grid2>
        </Grid2>
      </form>

    
    </Container>
  );
}

export default AddProduct;
>>>>>>> 61c3f86302fb764f8c897bf883975207dfe05100
