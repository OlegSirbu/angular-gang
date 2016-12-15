(function () {
    angular.module('app').factory('dataservices', dataservices);

    /* @ngInject */
    function dataservices($q, $timeout) {

        var getOrders = function() {
            var deferred = $q.defer();
            var d = [
                {
                    'name': 'Porsche',
                    'link': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 7',
                    'link': 'http://www.telegraph.co.uk/content/dam/motoring2/2015/12/02/1-2016-BMW-7-series-front-xlarge-xlarge_trans++rWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 3',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'Porsche',
                    'link': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 7',
                    'link': 'http://www.telegraph.co.uk/content/dam/motoring2/2015/12/02/1-2016-BMW-7-series-front-xlarge-xlarge_trans++rWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 3',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'Porsche',
                    'link': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 7',
                    'link': 'http://www.telegraph.co.uk/content/dam/motoring2/2015/12/02/1-2016-BMW-7-series-front-xlarge-xlarge_trans++rWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 3',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },{
                    'name': 'Porsche',
                    'link': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 7',
                    'link': 'http://www.telegraph.co.uk/content/dam/motoring2/2015/12/02/1-2016-BMW-7-series-front-xlarge-xlarge_trans++rWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 3',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'Porsche',
                    'link': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 7',
                    'link': 'http://www.telegraph.co.uk/content/dam/motoring2/2015/12/02/1-2016-BMW-7-series-front-xlarge-xlarge_trans++rWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 3',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'Porsche',
                    'link': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 7',
                    'link': 'http://www.telegraph.co.uk/content/dam/motoring2/2015/12/02/1-2016-BMW-7-series-front-xlarge-xlarge_trans++rWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 3',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]
                },
                {
                    'name': 'BMW 5',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]
                },
                {
                    'name': 'BMW 5',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]
                },
                {
                    'name': 'BMW 5',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]
                },
                {
                    'name': 'BMW 5',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]
                },
                {
                    'name': 'BMW 5',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]
                },
                {
                    'name': 'BMW 5',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]
                },
                {
                    'name': 'BMW 5',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]
                },
                {
                    'name': 'BMW 5',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 5',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                },
                {
                    'name': 'BMW 1',
                    'link': 'http://www.bmw-bahrain.com/content/dam/bmw/common/all-models/m-series/m4-coupe/2014/m4-gts/m4-gts-driving-large-teaser-.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447949538576.jpg',
                    'printItems': [
                        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOpmyRYMup_w6fjGOHBOTEqvVKS8AluEMpIi5wwIUnqa5gxjpakMumZLtN',
                        'http://pictures.topspeed.com/IMG/crop/201312/2014-porsche-918-spyder-8_600x0w.jpg'
                    ]

                }

            ];

            $timeout(function() {
                deferred.resolve(d);
            }, 1000);

            return deferred.promise;
        };

        return {
            getOrders: getOrders
        }
    }

})();