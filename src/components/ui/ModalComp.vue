<template>
    <transition name="modal" appear>
      <div class="modal modal-overlay" @click.self="$emit('close')">

        <!-- modal content -->
        <div class="modal-window">
            <!-- head -->
            <header class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" @click="$emit('close')"></button>
            </header>
            <!-- body -->
            <div class="modal-body">
                <slot/>
                <p> Modal Window!</p>
            </div>
            <!-- footer -->
            <footer class="modal-footer">
                <button type="button" class="btn btn-secondary btn-sm" @click="$emit('close')">취소</button>
                <button type="button" class="btn btn-primary btn-sm" @click="$emit('ok')">확인</button>
            </footer>
        </div>
      </div>
    </transition>
</template>

<script setup>

</script>


<style  scoped>


.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-window {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    width: 90%;
  }
  .modal-header {
    position: relative;
    height: 54px;
    padding: 13px 15px;
    border-bottom: 1px solid #c8c8c8;
  }

  .modal-body {
    /* padding: 10px 20px; */
    height: 300px;
  }

  .modal-footer {
    /* background: #ccc; */
    padding: 10px;
    text-align: right;
  }
</style>