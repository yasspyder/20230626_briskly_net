import { Routes, Route } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import TestsPage from '../pages/TestsPage';
import ArticlesPage from '../pages/ArticlesPage';
import AboutPage from '../pages/AboutPage';
import ContactsPage from '../pages/ContactsPage';
import NotFoundPage from '../pages/NotFoundPage';
import LessonsPage from '../pages/LessonsPage';
import SingleLessonPage from '../pages/SingleLessonPage';
import SingleTestPage from '../pages/SingleTestPage';
import ProfilePage from '../pages/ProfilePage';
import AuthRequire from '../hoc/AuthRequire';
import SingleArticlePage from '../pages/SingleArticlePage';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route
          path="/courses/:courseId"
          element={<AuthRequire children={<LessonsPage />} />}
        />
        <Route
          path="/lessons/:id"
          element={<AuthRequire children={<SingleLessonPage />} />}
        />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<SingleArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/tests/:id" element={<SingleTestPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
