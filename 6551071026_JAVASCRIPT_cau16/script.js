$(document).ready(function() {
  $("#addRow").click(function() {
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let birthdate = $("#birthdate").val();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || birthdate === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Email không hợp lệ!");
      return;
    }

    let newRow = `
      <tr>
        <td><input type="checkbox" class="selectRow"></td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${birthdate}</td>
      </tr>
    `;

    $("#userTable tbody").append(newRow);

    // Xóa nội dung input sau khi thêm
    $("#name").val("");
    $("#email").val("");
    $("#birthdate").val("");
  });

  $("#deleteRow").click(function() {
    $("input.selectRow:checked").each(function() {
      $(this).closest("tr").remove();
    });
  });
});
