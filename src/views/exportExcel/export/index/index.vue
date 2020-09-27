<template>
  <div class="app-container">
    <div>
      <el-button
        :loading="downloadLoading"
        style="margin:0 0 20px 20px;"
        type="primary"
        icon="document"
        @click="handleDownload"
      >Export Excel</el-button>
    </div>

    <el-table :data="list" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label="Id" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Readings" width="115" align="center">
        <template slot-scope="scope">{{ scope.row.pageviews }}</template>
      </el-table-column>
      <el-table-column align="center" label="Date" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.timestamp }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ExportExcel",
  data() {
    return {
      list: [
        {
          id: 0,
          title: "测试 excel 导出",
          author: "Alvin0",
          pageviews: "4401",
          timestamp: "1985-06-09 03:25"
        },
        {
          id: 1,
          title: "测试 excel 导出",
          author: "Alvin1",
          pageviews: "4401",
          timestamp: "1985-06-09 03:25"
        },
        {
          id: 2,
          title: "测试 excel 导出",
          author: "Alvin2",
          pageviews: "4401",
          timestamp: "1985-06-09 03:25"
        },
        {
          id: 3,
          title: "测试 excel 导出",
          author: "Alvin3",
          pageviews: "4401",
          timestamp: "1985-06-09 03:25"
        },
        {
          id: 4,
          title: "测试 excel 导出",
          author: "Alvin4",
          pageviews: "4401",
          timestamp: "1985-06-09 03:25"
        }
      ],
      downloadLoading: false,
      filename: "",
      autoWidth: true,
      bookType: "xlsx"
    };
  },
  created() {},
  methods: {
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then(excel => {
        const tHeader = ["Id", "Title", "Author", "Readings", "Date"];
        const filterVal = ["id", "title", "author", "pageviews", "timestamp"];
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        //const data = this.list;
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        });
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          if (j === "timestamp") {
            //return parseTime(v[j]);
            return v[j];
          } else {
            return v[j];
          }
        })
      );
    }
  }
};
</script>

<style>
.radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
}
</style>
