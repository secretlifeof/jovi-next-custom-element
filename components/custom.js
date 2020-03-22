import { useFormik } from 'formik'
import register from 'preact-custom-element'

const App = () => {
  const formik = useFormik({
    initialValues: { name: 'Preact' },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <form>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        name='name'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

if (typeof window !== 'undefined') {
  register(App, 'form-test', ['name'])
}
