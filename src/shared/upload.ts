class Upload {
  imageUpload = async (file: string) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'tx5olvnb');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dn7ljea7s/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    return await result.json();
  };
}

export default Upload;
