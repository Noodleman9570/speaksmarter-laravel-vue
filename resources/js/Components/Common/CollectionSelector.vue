<script setup>  
    import { ref } from 'vue'
    defineProps({
        collection: {
            type: Array,
            required: true
        }
    })

    const currentSelection = ref(1)
    const selection = ref([])

    const handleAddToSelection = () => {
        let alreadyExists = false
        selection.value.forEach(item => {
            if(item.id == currentSelection.value.id) {
                alreadyExists = true
                return 
            }
        })

        if(alreadyExists){
            return
        }
        selection.value.push(currentSelection.value)
        emit('onCategories', selection.value)
    }

    const handleRemoveSelection = (index) => {
        selection.value = selection.value.filter(item => item.id !== index)
        emit('onCategories', selection.value)
    }

    defineEmits(['onCategories'])

</script>

<template>      
    <div class="w-full">
        <div class="flex">
            <select v-model="currentSelection" class="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-l-md shadow-sm ">
                <option v-for="(item, index) in collection" :key="index" :value="item">{{ item?.name }}</option>
            </select>
            <button @click="handleAddToSelection" class="text-white bg-indigo-400 hover:bg-indigo-500 rounded-r py-2 px-4">Add</button>
            
        </div>
        <div>
            <ul>
                <li v-for="(item) in selection" @click="handleRemoveSelection(item.id)" class="text-white text-xs cursor-pointer bg-indigo-400 hover:bg-indigo-500 rounded py-2 px-3 mt-1 mb-1">
                    <div class="flex justify-between">
                        {{ item.name }} <i class="bi bi-x"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
</template>