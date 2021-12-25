import { useEffect } from 'react';

const useOnMounted = (effect) => {
	return useEffect(effect, []);
};

export default useOnMounted;
