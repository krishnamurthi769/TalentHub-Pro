import InputForm from '../InputForm';

export default function InputFormExample() {
  const handleSubmit = (resumeText: string, jobDescriptionText: string) => {
    console.log('Form submitted:', { resumeText, jobDescriptionText });
  };

  return (
    <InputForm 
      onSubmit={handleSubmit} 
      isLoading={false}
    />
  );
}