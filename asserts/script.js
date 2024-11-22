function checkVisibility() {
  const elements = document.querySelectorAll('.fade-in'); // เลือกองค์ประกอบที่มีคลาส fade-in
  
  elements.forEach(element => {
      const rect = element.getBoundingClientRect(); // ตรวจสอบตำแหน่งขององค์ประกอบ
      
      // ตรวจสอบว่าองค์ประกอบอยู่ใน viewport หรือไม่
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.classList.add('visible'); // เพิ่มคลาส visible เมื่อองค์ประกอบอยู่ในหน้าจอ
      } else if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible'); // ตรวจสอบในกรณีที่องค์ประกอบปรากฏบางส่วน
      } else {
          element.classList.remove('visible'); // ลบคลาส visible ถ้าองค์ประกอบอยู่นอกหน้าจอ
      }
  });
}

// ตรวจสอบเมื่อมีการเลื่อนหน้าเว็บ
window.addEventListener('scroll', checkVisibility);

// เรียกใช้ checkVisibility ตอนโหลดหน้าเว็บ
window.addEventListener('load', checkVisibility);
