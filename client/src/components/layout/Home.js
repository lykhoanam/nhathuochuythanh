import React from 'react'
import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

import { FiDownload, FiPlus, FiChevronDown, FiDollarSign, FiFileText, FiAlertTriangle, FiUser } from 'react-icons/fi';
import Card from '../common/Card';
import Button from '../common/Button';
import '../../styles/Home.css';

const Home = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: 250,
      },
      false
    );

    scanner.render(
      (decodedText) => {
        console.log("Scanned:", decodedText);
        alert("Barcode: " + decodedText);
      },
      (error) => {
        // ignore scan errors
      }
    );

    return () => {
      scanner.clear();
    };
  }, []);

  const stats = [
    { icon: <FiDollarSign />, title: 'Tổng doanh thu', value: '150.000.000đ', change: '+12.5%', changeColor: 'positive' },
    { icon: <FiFileText />, title: 'Đơn thuốc đã kê', value: '1,240', change: '+5.2%', changeColor: 'positive' },
    { icon: <FiAlertTriangle />, title: 'Cảnh báo sắp hết hàng', value: '12', change: '-3.1%', changeColor: 'negative' },
    { icon: <FiUser />, title: 'Tổng số khách hàng', value: '850', change: '+8.4%', changeColor: 'positive' }
  ];

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h1>Tổng quan hệ thống</h1>
        <div className="dashboard-actions">
          <Button><FiDownload style={{marginRight:'0.25rem'}}/>Xuất báo cáo</Button>
          <Button primary><FiPlus style={{marginRight:'0.25rem'}}/>Đơn hàng mới</Button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((s, idx) => <Card key={idx} {...s} />)}
      </div>

      {/* placeholder for charts, tables, etc. */}

      <div style={{ padding: "20px" }}>
      <h2>Quét mã thuốc</h2>
      <div id="reader" />
    </div>
    </section>
  );
}

export default Home
