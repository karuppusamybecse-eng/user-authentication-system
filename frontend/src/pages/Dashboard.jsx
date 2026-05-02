import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { User, Mail, Calendar, ShieldCheck } from 'lucide-react';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container dashboard-page">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your secure area, {user.name}!</p>
      </div>

      <div className="dashboard-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--success)' }}>
          <ShieldCheck size={24} />
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>Authentication Successful</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="info-group">
            <div className="info-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={16} /> Full Name
            </div>
            <div className="info-value">{user.name}</div>
          </div>

          <div className="info-group">
            <div className="info-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} /> Email Address
            </div>
            <div className="info-value">{user.email}</div>
          </div>

          <div className="info-group">
            <div className="info-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={16} /> Account Created
            </div>
            <div className="info-value">
              {user.createdAt ? formatDate(user.createdAt) : 'Recently'}
            </div>
          </div>
          
          <div className="info-group">
            <div className="info-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={16} /> Account Status
            </div>
            <div className="info-value" style={{ color: 'var(--success)' }}>Active & Verified</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
