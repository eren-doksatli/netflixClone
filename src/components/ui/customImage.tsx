import React from 'react';
import {Image} from 'react-native';
import {TOKEN} from '../../utils/constants';
import {IMAGE_BASE_URL} from '../../service/urls';
import {customImageProps} from '../../model/ui/customImageProps';

const CustomImage: React.FC<customImageProps> = props => {
  const {path, style} = props;

  return (
    <Image
      source={{
        uri: `${IMAGE_BASE_URL}${path}`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      }}
      style={style}
    />
  );
};

export default CustomImage;
