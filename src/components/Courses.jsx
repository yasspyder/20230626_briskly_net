import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCourses } from '../store/slices/coursesSlice';
import CardComponent from './CardComponent';
import Sceleton from './Sceleton';

function CourseComponent({ count }) {
  const loading = useSelector((state) => state.courses.loading);
  const courses = useSelector((state) => state.courses.courses);
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!courses.length) {
      dispatch(fetchCourses());
    }
  });

  return (
    <div className="container-fluid text-center">
      <h2 className="mb-5">Курсы</h2>
      {loading ? (
        <Sceleton />
      ) : (
        <>
          <div className="d-flex justify-content-center">
            <div className="row w-100">
              {count ? (
                courses
                  .slice(0, count)
                  .map(({ id, image_url, name, description }) => (
                    <CardComponent
                      key={id}
                      img={image_url}
                      title={name}
                      description={description}
                      linkPath={`/courses/${id}`}
                      userRequire={profile ? false : true}
                    />
                  ))
              ) : (
                <>
                  {courses.map(({ id, image_url, name, description }) => (
                    <CardComponent
                      key={id}
                      img={image_url}
                      title={name}
                      description={description}
                      linkPath={`/courses/${id}`}
                      userRequire={profile ? false : true}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CourseComponent;
