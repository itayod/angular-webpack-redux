export const SWITCH_IMAGE = 'SWITCH_IMAGE';

export function switchImage(selectedImageId){

  return (dispatch,getState) =>{
    const { images } = getState();

    if(selectedImageId === images.imageList.length){
      selectedImageId = 1;
    }else if(selectedImageId === 0){
      selectedImageId = images.imageList.length
    }


    angular.forEach(images.imageList, function(image) {

      if(image.id === (selectedImageId) ){
        dispatch(
          {
            type:SWITCH_IMAGE,
            selectedImage: image
          }
        )
      }
    });

  }
}
