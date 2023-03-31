export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: require('@/images/banner/banner-1.jpg'),
                thumbnailImageSrc: require('@/images/banner/banner-1.jpg'),
                alt: 'Hơi thở là một đề mục, trong muôn ngàn đề mục thiền định, chớ chẳng phải một môn độc nhứt để đến thiền định',
                title: 'Phương Thảo Am',
            },
            {
                itemImageSrc: require('@/images/banner/banner-2.jpg'),
                thumbnailImageSrc: require('@/images/banner/banner-2.jpg'),
                alt: 'Hơi thở là một đề mục, trong muôn ngàn đề mục thiền định, chớ chẳng phải một môn độc nhứt để đến thiền định',
                title: 'Phương Thảo Am',
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    },
};
