let cropper;

document.getElementById('iamgeInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;

  const imgElement = document.getelementById('cropTarget');

  if (cropper) {
    cropper.destroy();
  }

  imgElement.src = URL.createObjectURL(file);
  imgElement.stule.display = 'block';

  imgElement.onload = function() {
    cropper = new Cropper(imgElement, {
      aspectRatio: 1,
      viewMode: 1,
      movable: true,
      zoomable: true,
      scalable: false,
    });
  
    document.getElementById('cropBtn').style.display = 'block';
  };

  document.getElementById('croptBtn').addEventListener('click', function() {
    const croppedCanvas = cropper.getCroppedCanvas({
      width: 240,
      height: 280,
    });

    const preview = document.getelementById('preview');
    preview.width = 240;
    preview.height = 280;
    const ctx = preview.getContext('2d');
    ctx.drawImage(croppedCanvas, 0, 0);

    const imageData = ctx.getImageData(0, 0, 240, 280);
});
                                                  
